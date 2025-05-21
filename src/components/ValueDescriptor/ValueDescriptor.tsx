import * as VD from './ValueDescriptor.styles'

export interface ValueDesciptorProps {
    description: string,    
    isCurrency?: boolean,
    color: 'primary' | 'default'
    value: number,
}


export default function ValueDescriptor(props: ValueDesciptorProps) {
    return <VD.Wrapper>
       <span className='Description'>{ props.description }</span>
       <div>
        {
            props.isCurrency &&
            <span className='Currency'>{'R$'}</span>
        }
        
        <span className='Value'>
            { props.value.toLocaleString('pt-br') }
        </span>
       </div>
    </VD.Wrapper>
}