const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  justifyContent: 'center',
  alignItems: 'center'
}

const logoStyle = {
  display: 'flex',
  margin: 20,
  padding: 20,
  width: '50%',
  height: '50%'
}

export default () => {
  return(
    <div style={containerStyle}>
      <p>
        init - NextJS
      </p>
      <img src={'../static/assets/init_logo.jpg'} style={logoStyle}/>
    </div>
  )
}