export const Status = ({message, status}) => {
    let classType = '' 
    status === 'error' ? classType = 'error' : classType = 'success'
    if ( message !== ''){
        return <h2 className={classType}>{message}</h2>
    }
    else{
        return <h2> </h2>
    }
    
}