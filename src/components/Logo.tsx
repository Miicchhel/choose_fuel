export default function Logo({ className, src, alt }:LogoProps) {
    return (
        <img className={className} src={src} alt={alt} />
    )
}