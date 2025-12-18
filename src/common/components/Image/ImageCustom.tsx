type Props = {
    src: string
    alt: string
    widthPx: string
    heightPx: string  
    className?: string  
};
export const ImageCustom = ({src, alt, widthPx, heightPx, className}: Props) => {
    return (
        <img src={src} alt={alt} width={widthPx} height={heightPx} className={className}/>
    );
};