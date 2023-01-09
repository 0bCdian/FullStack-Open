const Header = ({ title }) => {
    return <h1>{title}</h1>;
};
const Content = (props) => {
    return (
        <p>
            {props.part} {props.numberOf}
        </p>
    );
};
const Total = (props) => {
    return (
        <p>Number of exercises {props.total1 + props.total2 + props.total3}</p>
    );
};

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <>
            <Header title={course} />
            <Content part={part1} numberOf={exercises1} />
            <Content part={part2} numberOf={exercises2} />
            <Content part={part3} numberOf={exercises3} />
            <Total
                total1={exercises1}
                total2={exercises2}
                total3={exercises3}
            />
        </>
    );
};

export default App;
