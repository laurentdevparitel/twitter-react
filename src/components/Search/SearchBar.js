import React from "react";

import {
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupButton,
} from '@bootstrap-styled/v4';

const SearchBar = () => {

    return (
        <Form>
            <FormGroup>
                <Label htmlFor="search"><b>Recherche Twitter</b></Label>
                <InputGroup>
                    <Input type="text" placeholder="#React" id="search" />
                    <InputGroupButton>
                        Rechercher
                    </InputGroupButton>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default SearchBar;