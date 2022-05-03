import React from 'react';
import { createRoot } from 'react-dom/client';

type HelloProps = {
    name: string;
};

const Hello = (props: HelloProps) => {
    return (
        <h1>Hello, {props.name}!</h1>
    );
};

function withName(WrappedComponent: any) {
    return class extends React.Component {
        render() {
            return (
                <WrappedComponent name="Mad Max" {...this.props} />
            );
        };
    };
}

const Greeting = withName(Hello);
const App = () => (
    <div>
        <Greeting />
    </div>
);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);