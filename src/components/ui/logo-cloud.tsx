import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 md:py-6 lg:py-8 w-full bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={48} reverse={false} duration={30} durationOnHover={60}>
        {logos.map((logo, index) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-12 w-auto select-none sm:h-14 md:h-16 lg:h-20 object-contain flex-shrink-0"
            height={logo.height}
            key={`logo-${index}`}
            src={logo.src}
            width={logo.width}
            style={{ minWidth: '100px', maxWidth: '180px' }}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}

