import { useEffect, useRef, useState } from 'react'

interface LogoWithTransparencyProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  threshold?: number
}

/**
 * Renders a logo image with its white background removed at runtime.
 * Uses an offscreen canvas to replace white/near-white pixels with transparency.
 * This is the professional approach when you have a PNG with a solid white background
 * but need it composited on a dark surface.
 */
export default function LogoWithTransparency({ 
  src, 
  alt, 
  className = '', 
  style = {},
  threshold = 235 
}: LogoWithTransparencyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [processedSrc, setProcessedSrc] = useState<string | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        
        // If all channels are above threshold → near-white → make transparent
        if (r > threshold && g > threshold && b > threshold) {
          data[i + 3] = 0 // Set alpha to 0
        }
        // Soften semi-white edges (anti-aliasing zone)
        else if (r > threshold - 30 && g > threshold - 30 && b > threshold - 30) {
          const avg = (r + g + b) / 3
          const factor = Math.max(0, (avg - (threshold - 30)) / 30)
          data[i + 3] = Math.round(data[i + 3] * (1 - factor * 0.8))
        }
      }

      ctx.putImageData(imageData, 0, 0)
      setProcessedSrc(canvas.toDataURL('image/png'))
    }
    img.src = src
  }, [src, threshold])

  if (!processedSrc) {
    // Fallback: show original with mix-blend-lighten while processing
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`${className} mix-blend-lighten`} 
        style={style} 
      />
    )
  }

  return (
    <img 
      ref={canvasRef as unknown as React.Ref<HTMLImageElement>}
      src={processedSrc} 
      alt={alt} 
      className={className} 
      style={style} 
    />
  )
}
