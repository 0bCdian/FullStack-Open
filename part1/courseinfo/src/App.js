const Header = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
};

const Content = (props) => {
    return <p>{props.courseName}</p>;
};

const Total = (props) => {
    return <p> {props.total}</p>;
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
        // <div>
        //     <h1>{course}</h1>
        //     <p>
        //         {part1} {exercises1}
        //     </p>
        //     <p>
        //         {part2} {exercises2}
        //     </p>
        //     <p>
        //         {part3} {exercises3}
        //     </p>
        //     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        // </div>
        <div>
            <Header title={course} />

            <Content courseName={part1} />
            <Total total={exercises1} />

            <Content courseName={part2} />
            <Total total={exercises2} />

            <Content courseName={part3} />
            <Total total={exercises3} />
        </div>
    );
};

export default App;
