import React from 'react';

import {
    Container
} from "@bootstrap-styled/v4";

import Search from "../components/Search/Search";

const HomeView = () => {
    return (
        <Container>
            <div className="view-container home">
                <Search/>
            </div>
        </Container>
    );
};

export default HomeView;
