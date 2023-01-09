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
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10,
    };
    const part2 = {
        name: "Using props to pass data",
        exercises: 7,
    };
    const part3 = {
        name: "State of a component",
        exercises: 14,
    };
    return (
        <div>
            <Header title={course} />
            <Content
                part1={part1.name}
                part2={part2.name}
                part3={part3.name}
                exercises1={part1.exercises}
                exercises2={part2.exercises}
                exercises3={part3.exercises}
            />
            <Total
                total1={part1.exercises}
                total2={part2.exercises}
                total3={part3.exercises}
            />
        </div>
    );
};

export default App;
