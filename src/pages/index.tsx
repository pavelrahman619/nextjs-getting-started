
import { useState } from 'react';

export default function Profile() {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://source.unsplash.com/300x300',
    imageSize: 90,
  };

  const isVisible = false;

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>
  )

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{user.name}</h1>
      {isVisible ? (
        <div>This is visible</div>

      ) :
        (
          <div>is Visible disabled</div>
        )}
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

      <ul>{listItems}</ul>

      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}


interface MyButtonProps {
  count: number;
  onClick: () => void;
}

function MyButton({ count, onClick }: MyButtonProps) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

