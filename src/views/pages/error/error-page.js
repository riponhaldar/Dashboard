import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div
      id='error-page'
      style={{
        display: 'flex',
        margin: 'auto',
        width: '100%',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{/* <i>{error.statusText || error.message}</i> */}</p>
        <img
          style={{ height: 200, width: 300 }}
          src='https://picsum.photos/200/300'
          alt=''
        />
      </div>
    </div>
  );
}
