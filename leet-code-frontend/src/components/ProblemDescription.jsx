/* eslint-disable react/prop-types */


const ProblemDescription = ({ problem }) => {
    if (!problem) {
        // Handle the case where 'problem' is undefined or null
        return <div>Loading...</div>; // You can replace this with a loading indicator or any other message.
    }
    return (
        <>
            <h1 className="text-xl font-bold">{problem.title}</h1>
            <p className="text-sm py-2">{problem.description}</p>
            <h1 className="font-semibold py-2">Testcases</h1>
            {problem.testCases && problem.testCases.map((testcase, index) => (
                <div key={index} className="p-4 my-2 bg-slate-100 rounded-md text-sm">
                    <span className="font-bold py-2">Input : </span>
                    <span>{testcase.input}</span>
                    <br />
                    <span className="font-bold py-2">Output : </span>
                    <span>{testcase.output}</span>
                </div>
            ))}
        </>
    );
};

export default ProblemDescription;