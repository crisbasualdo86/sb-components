import './mylabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje que se muestra en el label
     */
    label?: string;
    /**
     * Este es el tamaño del label
     *  */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Este es el color del label
     *  */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Convierte el texto a mayúsculas
     */
    allCaps?: boolean;

    /**
     * Color personalizado de la fuente
     * */
    fontColor?: string;
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor,
}: MyLabelProps) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{ color: fontColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
