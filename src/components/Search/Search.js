
import React from "react";
import {
    Row,
    Col
} from '@bootstrap-styled/v4';

import SearchBar  from "./SearchBar";

const Search = () => {

    return (
        <Row>
            <Col lg="12">
                <SearchBar />
            </Col>
        </Row>
    )
}

export default Search;