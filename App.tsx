import * as React from 'react';

export default function App() {
  const user = 'root';
  const hostname = 'localhost';
  const [commands, setCommands] = React.useState<Array<string>>([]);
  const [userCommand, setUsercommand] = React.useState<string>();
  const ref = React.useRef<HTMLInputElement>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userCommand != 'clear') {
      setCommands([...commands, userCommand]);
    }
  };

  React.useEffect(() => {
    if (userCommand === 'clear') {
      setCommands([]);
    }
  }, [userCommand]);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'consolas',
      }}
    >
      <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
        <p>
          {hostname}${user}:
          <input
            type="text"
            style={{
              backgroundColor: 'black',
              border: 'none',
              color: 'white',
            }}
            value={userCommand}
            onChange={(e) => setUsercommand(e.target.value)}
            ref={ref}
          />
        </p>
      </form>
      {commands.map((command, i) => (
        <p key={i} style={{ color: 'white' }}>
          {hostname}${user}: {command}
        </p>
      ))}
    </div>
  );
}
