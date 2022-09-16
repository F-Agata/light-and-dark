import React, { useState, useContext} from "react";
import {MealsContext} from "../context/MealsContext";
import {Box, TitleAndText} from "../styles";
import styled, {css} from "styled-components";
import {LightOrDarkContext} from "../context/LightOrDarkContext";


const NewDishForm = () => {
    const [nameFromValue, setNameFromValue] = useState('')

    const lOrD = useContext(LightOrDarkContext)
    const yourChoiceLOrD = lOrD.darkVariant ? lOrD.darkVersion : lOrD.lightVersion;

    const {addDishToArray} = useContext(MealsContext)

    const handleChange = (e) => {
        setNameFromValue(e.target.value)
    }

    const  handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameFromValue)
        addDishToArray(nameFromValue)
        setNameFromValue('')

    }

    return (
        <Box  width={'80%'}>
            <FormNewDish
                onSubmit={handleSubmit}
            >
                <label htmlFor={'dish'}><TitleAndText variant={'textSmall'}  color={yourChoiceLOrD.tc}>twoja ulubiona potrawa</TitleAndText></label>
                <InputNewDish type={'text'}
                              id={'dish'}
                              name={'dish'}
                              placeholder={'wpisz ulubioną potrawę'}
                              required
                              yourChoiceLOrD={yourChoiceLOrD}
                              value={nameFromValue}
                              onChange={ handleChange}
                />
                <InputAddDish type={"submit"} value={"dodaj potrawę do listy"} yourChoiceLOrD={yourChoiceLOrD}/>
            </FormNewDish>
        </Box>
    )
}

export default NewDishForm

const FormNewDish = styled.form`
  width: 100%;
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    `

const InputNewDish = styled.input`
  width: 100%;
  margin-top: 10px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid white;
    `

const InputAddDish = styled.input`
  
  margin-top: 10px;
  padding: 10px;
  border: 2px solid white;
  letter-spacing: 2px;
  border-radius: 10px;
  cursor: pointer;
  ${({ yourChoiceLOrD }) => css`
     background: ${yourChoiceLOrD.bgc};
        color: ${yourChoiceLOrD.tc};
             `};
    `