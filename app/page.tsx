import Grainient from "@/components/Grainient"

export default function Page() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      <div className="absolute inset-0">
        <Grainient
          color1="#8d2121"
          color2="#3b1313"
          color3="#fff957"
          timeSpeed={1.35}
          colorBalance={-0.05}
          warpStrength={1.15}
          warpFrequency={5}
          warpSpeed={2.6}
          warpAmplitude={50}
          blendAngle={-57}
          blendSoftness={0.27}
          rotationAmount={0}
          noiseScale={2}
          grainAmount={0.2}
          grainScale={2}
          grainAnimated={false}
          contrast={2.5}
          gamma={0.95}
          saturation={1.05}
          centerX={0}
          centerY={0}
          zoom={0.75}
        />
      </div>
      <div className="relative z-10 flex min-h-svh items-center justify-center p-6">
        <h1 className="font-google-flex text-lg font-medium text-white">toolsforai</h1>
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/40 uppercase tracking-[0.3em]">
          coming soon
        </p>
      </div>
    </div>
  )
}