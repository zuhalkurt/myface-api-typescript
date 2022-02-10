import React from 'react';
import { render, screen} from '@testing-library/react';
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import { Navbar } from './Navbar';

test("should match snapshot", async () => {
    
    const tree = renderer.create(<BrowserRouter> <Navbar/> </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();})