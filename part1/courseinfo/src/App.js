const Header = ({ title }) => {
    return <h1>{title}</h1>;
};
const Part = (props) => (
    <p>
        {props.part} {props.numberOf}
    </p>
);

const Content = (props) => {
    const { part1 } = props;
    const { part2 } = props;
    const { part3 } = props;
    const { exercises1 } = props;
    const { exercises2 } = props;
    const { exercises3 } = props;
    return (
        <>
            <Part part={part1} numberOf={exercises1} />
            <Part part={part2} numberOf={exercises2} />
            <Part part={part3} numberOf={exercises3} />
        </>
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
            <Content
                part1={part1}
                part2={part2}
                part3={part3}
                exercises1={exercises1}
                exercises2={exercises2}
                exercises3={exercises3}
            />
            <Total
                total1={exercises1}
                total2={exercises2}
                total3={exercises3}
            />
        </>
    );
};

export default App;
