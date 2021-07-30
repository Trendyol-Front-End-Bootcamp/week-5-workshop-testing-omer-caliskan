export const divFunc = (a, b) => {
    const zero_control = b === 0;
    const number_control = isNaN(a) || isNaN(b);

    if(zero_control) throw new Error('DIVIDE_BY_ZERO_ERROR');
    if(number_control) throw new Error('NOT_A_NUMBER_ERROR');

    return a/b; 
}