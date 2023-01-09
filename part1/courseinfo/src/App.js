const Header = ({ title }) => {
    return <h1>{title}</h1>;
};
const Part = (props) => (
    <p>
        {props.part} {props.numberOf}
    </p>
);

const Content = (props) => {
    const part1 = props.parts[0].name;
    const part2 = props.parts[1].name;
    const part3 = props.parts[2].name;
    const exercises1 = props.parts[0].exercises;
    const exercises2 = props.parts[1].exercises;
    const exercises3 = props.parts[2].exercises;
    return (
        <>
            <Part part={part1} numberOf={exercises1} />
            <Part part={part2} numberOf={exercises2} />
            <Part part={part3} numberOf={exercises3} />
        </>
    );
};
const Total = (props) => {
    const total =
        props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises;
    return <p>Number of exercises {total} </p>;
};

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        { name: "Fundamentals of React", exercises: 10 },
        { name: "Using props to pass data", exercises: 7 },
        { name: "State of a component", exercises: 14 },
    ];
    return (
        <div>
            <Header title={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};

export default App;
