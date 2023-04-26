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
    /**
     * Color personalizado del fondo
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor,
    backgroundColor = 'transparent',
}: MyLabelProps) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{ color: fontColor, backgroundColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
