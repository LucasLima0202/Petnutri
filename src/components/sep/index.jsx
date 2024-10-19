import styled from "styled-components"

const Separador = styled.hr`
 width:80%;
 border-top: 1px solid #ecd8d8;
 
@media (max-width: 468px) {
border:none;

}
`

const Sep = () => {
  return(
    <>
        <Separador> 
        </Separador>
    </>
  )
}

export default Sep;