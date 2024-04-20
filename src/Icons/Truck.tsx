
type Props = {
    height: number,
    width: number,
    fill: string
}

const Truck = (props: Props) => {
    const { height, width, fill } = props;
    return (
        <svg style={{ height: `${height}px`, width: `${width}`, fill: fill }} version="1.1" id="LFayer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 74.34"><g><path d="M94.42,18.73l-17.98-0.1V6.53c0-1.8-0.73-3.43-1.92-4.61C73.34,0.73,71.71,0,69.91,0H20.07 c-1.8,0-3.43,0.73-4.61,1.92c-1.18,1.18-1.92,2.81-1.92,4.61c0,0.98,0.79,1.77,1.77,1.77c0.98,0,1.77-0.79,1.77-1.77 c0-0.82,0.34-1.57,0.88-2.11c0.54-0.54,1.29-0.88,2.11-0.88h49.84c0.82,0,1.57,0.34,2.11,0.88c0.54,0.54,0.88,1.29,0.88,2.11v55.41 h-9.98c-0.98,0-1.77,0.79-1.77,1.77c0,0.98,0.79,1.77,1.77,1.77h11.75c0.98,0,1.77-0.79,1.77-1.77v-2.01h10.68 c0.81-18.42,27.26-20.96,29.95,0h5.81l-1.79-19.22l-19.07-7.3L94.42,18.73L94.42,18.73z M2.65,37.54c-1.47,0-2.65-0.8-2.65-1.78 c0-0.98,1.19-1.78,2.65-1.78h23.89c1.47,0,2.65,0.8,2.65,1.78c0,0.98-1.19,1.78-2.65,1.78H2.65L2.65,37.54z M8.12,27.96 c-1.1,0-1.99-0.79-1.99-1.77c0-0.98,0.89-1.77,1.99-1.77h18.43c1.1,0,1.99,0.79,1.99,1.77c0,0.98-0.89,1.77-1.99,1.77H8.12 L8.12,27.96z M10.65,18.38c-1.1,0-1.99-0.79-1.99-1.77c0-0.98,0.89-1.77,1.99-1.77h15.89c1.1,0,1.99,0.79,1.99,1.77 c0,0.98-0.89,1.77-1.99,1.77H10.65L10.65,18.38z M26.46,61.93c0.98,0,1.77,0.79,1.77,1.77c0,0.98-0.79,1.77-1.77,1.77h-6.39 c-1.79,0-3.42-0.78-4.61-2.01c-1.18-1.23-1.92-2.91-1.92-4.69v-13c0-0.98,0.79-1.77,1.77-1.77c0.98,0,1.77,0.79,1.77,1.77v13 c0,0.85,0.35,1.66,0.92,2.25c0.54,0.56,1.27,0.92,2.06,0.92H26.46L26.46,61.93z M44.46,50.37c-6.62,0-11.99,5.37-11.99,11.99 c0,6.62,5.37,11.99,11.99,11.99c6.62,0,11.99-5.37,11.99-11.99C56.44,55.74,51.08,50.37,44.46,50.37L44.46,50.37z M44.46,57.75 c-2.54,0-4.61,2.06-4.61,4.61c0,2.54,2.06,4.61,4.61,4.61c2.54,0,4.61-2.06,4.61-4.61C49.06,59.81,47,57.75,44.46,57.75 L44.46,57.75z M102.06,50.37c-6.62,0-11.99,5.37-11.99,11.99c0,6.62,5.37,11.99,11.99,11.99s11.99-5.37,11.99-11.99 C114.05,55.74,108.68,50.37,102.06,50.37L102.06,50.37z M102.06,57.75c-2.54,0-4.61,2.06-4.61,4.61c0,2.54,2.06,4.61,4.61,4.61 s4.61-2.06,4.61-4.61C106.67,59.81,104.61,57.75,102.06,57.75L102.06,57.75z M89.79,23.81l-8.93-0.1V35.2h14.97L89.79,23.81 L89.79,23.81z" /></g></svg>
    )
}

export default Truck