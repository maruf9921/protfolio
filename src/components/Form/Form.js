import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../../styles/GlobalComponents/Button';

const Form = () => {
    return (
        <Section>
            <SectionTitle>Contact Me</SectionTitle>
            <Box
      sx={{
        width: 900,
        maxWidth: '100%',
        p: 6,
      }}
    >
      <TextField sx={{
        width: 900,
        maxWidth: '100%',
      }} label="Your Email" color="secondary" type="email" focused />
      <TextField sx={{
        width: 900,
        maxWidth: '100%',
        my: 4,
      }} label="Text" color="secondary" type="text" focused />
      <Button>Submit</Button>
    </Box>
        </Section>
    );
};

export default Form;