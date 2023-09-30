export const useStyles = () => {

    const tableShow = {
      maxWidth: "700px",
      marginLeft: "auto",
      marginRight: "auto",
    };

    const tableData = {
        textAlign: "left",
        //margin: 20,
        //padding: 10,
        // From https://www.w3schools.com/react/react_css.asp
        // color: "white",
        // backgroundColor: "DodgerBlue",
        // padding: "10px"
        // fontFamily: "Arial"
        border: 1
      };

      return {
        tableShow,
        tableData,
      }
    }