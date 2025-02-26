import { cva } from "class-variance-authority"

export const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                gradient: "relative overflow-hidden bg-primary text-white border-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary before:to-purple-600 before:transition-all before:duration-300 hover:before:opacity-90 hover:transform hover:scale-105 active:scale-95 shadow-lg",
                neon: "group relative px-6 py-3 overflow-hidden bg-transparent border border-primary rounded-md text-primary-foreground hover:text-primary-foreground shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8 text-base",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)
