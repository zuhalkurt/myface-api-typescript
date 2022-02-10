import React from 'react';
import renderer from "react-test-renderer";
import { render, screen} from '@testing-library/react';
import { Post } from "../post/Post";


test('renders post message', () => {
    const post = {
      message: "Post message",
      imageUrl: "Image Url",
      createdAt: "2022/04/05 11:00",
      postedBy: {
        name: "User name"
      },
    };

    render(<Post post={post} />);
    const messageElement = screen.getByText(/post message/i);
    expect(messageElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const post = {
    message:"Post message",
    imageUrl: "Image Url",
    createAt: "2022/04/05 11:00",
    postedBy: {
      name:"User name",
    },
  };

  const tree = renderer
    .create(<Post post={post}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});



