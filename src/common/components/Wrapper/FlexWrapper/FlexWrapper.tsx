type Props = {   
    children: React.ReactNode
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: number;
    className?: string
};

export const FlexWrapper = ({children, direction='row', justify='flex-start', align, wrap='nowrap', gap=0, className}: Props) => {
    return (
        <div className={className} style={{display: 'flex', flexDirection: direction, justifyContent: justify, alignItems: align, flexWrap: wrap, gap}}>
            {children}            
        </div>
    );
};