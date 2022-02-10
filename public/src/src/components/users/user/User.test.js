import React from 'react';
import { render, screen} from '@testing-library/react';
import { User } from "../user/User";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

test("should match snapshot", async () => {
    const user ={
        name:"name",
        profileImageUrl:"Profile image url",
    }
    const tree = renderer.create(<BrowserRouter> <User user={user}/> </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();})