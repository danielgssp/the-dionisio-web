import React from 'react';
import {Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalLinearStepper extends React.Component {


    constructor(){
      super();
      this.jonathan = this.jonathan.bind(this);
    }

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

   jonathan = () => {  (<h1>Jonathan</h1>);}

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return this.jonathan();
            case 1:
                return 'FODA-SE 2';
            case 2:
                return 'FODA-SE 3';
            default:
                return 'FODA-SE 4';
        }
    }

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};

        return (
            <div style={{width: '100%', maxWidth: 'none', margin: 'auto', fontFamily: 'Roboto'}}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Informações básicas</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Configura evento</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Adicione uma foto</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                            <p>
                                <a
                                    href="#"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.setState({stepIndex: 0, finished: false});
                                    }}
                                >
                                    Click here
                                </a> to reset the example.
                            </p>
                        ) : (
                            <div>
                                <p>{this.getStepContent(stepIndex)}</p>
                                <div style={{marginTop: '12px', float:'right'}}>
                                    <FlatButton
                                        label="Back"
                                        disabled={stepIndex === 0}
                                        onTouchTap={this.handlePrev}
                                        style={{marginRight: 12}}
                                    />
                                    <RaisedButton
                                        label={stepIndex === 2 ? 'Finish' : 'Next'}
                                        primary={true}
                                        onTouchTap={this.handleNext}
                                    />
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default HorizontalLinearStepper;
