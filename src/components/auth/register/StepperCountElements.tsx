import React from 'react'

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import { StepIconProps } from '@mui/material/StepIcon';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
    '',
    '',
    '',
    ''
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background:
                '#232323',
                transition: '1s'

        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background:
                '#1ec687',
                transition: '1s'

        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    fontSize: '1.5rem',
    fontWeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        background:
            '#232323',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        transition: '1s'

    }),
    ...(ownerState.completed && {
        background:
            '#18920A',
            transition: '1s'
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
    const step: any = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
    };
    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {step[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}


const StepperCountElements = ({ step }: any) => {
    return (
        <Stepper activeStep={step} alternativeLabel connector={<ColorlibConnector />} style={{ marginBottom: '40px' }}>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{step}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default StepperCountElements

