import variables from "@/styles/_variables.scss";
import {
    ITableDataUiDesignedWithData,
    ITableDataFactoryMain, ITableDataFactoryInfo, ITableProjectPriorityDifficulty,
    ITableDataUiDesignedWithoutData
} from '@/api/types'

// For Tables not UI
export const  getDesignElementUiHeaderStyle = ( rowIndex: number, columnIndex: number, designTable: ITableDataUiDesignedWithData, totalRow: number) => {
    //Title
    if (rowIndex === 0) {
        return {
            "color": designTable.title.font["color"],
            "height": designTable.title.height,
            "background-color": designTable.title["background-color"],
            "text-align": designTable.title["textAlign"],
            "padding": designTable.title["padding"],
            "font-family": designTable.title.font["family"],
            "font-size": designTable.title.font["size"],
            "border-top":  designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-bottom": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
        };
    }
    //Header First column
    else if (rowIndex === 1) {
        //Header First column
        if (columnIndex === 0) {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top": "0px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": designTable.title.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-right": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
            };
        }
        //Header Last column
        else if (columnIndex === (designTable.header.text.length)) {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top": "0px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": "0px solid " + designTable.header.bordure.color,
                "border-right": designTable.title.bordure.length + "px solid " + designTable.header.bordure.color,
            };
        }
        //Header All other column
        else {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top": "0px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": "0px solid " + designTable.header.bordure.color,
                "border-right": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
            }
        }
    }
}
export const  getDesignElementUiCellsStyle= ( rowIndex: number, columnIndex: number, designTable: ITableDataUiDesignedWithData, totalRow: number ) => {
    if ((columnIndex < designTable.header.text.length) && (totalRow > 0)) {
        //All on the left
        if (columnIndex == 0) {
            //Top Left
            if (rowIndex == 0) {
                //Test Table with only one row
                if (totalRow === 1) {
                    return {
                        //"background-color": designTable.columns[columnIndex].backgroundColor,
                        "text-align": designTable.columns.design[columnIndex].textAlign,
                        "padding": designTable.columns.design[columnIndex].padding,
                        "font-family": designTable.columns.design[columnIndex].font.family,
                        "color": designTable.columns.design[columnIndex].font.color,
                        "font-size": designTable.columns.design[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columns.bordure.color,
                        "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    };
                }
                else {
                    return {
                        //"background-color": designTable.columns[columnIndex].backgroundColor,
                        "text-align": designTable.columns.design[columnIndex].textAlign,
                        "padding": designTable.columns.design[columnIndex].padding,
                        "font-family": designTable.columns.design[columnIndex].font.family,
                        "color": designTable.columns.design[columnIndex].font.color,
                        "font-size": designTable.columns.design[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columns.bordure.color,
                        "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    };
                }
            }
            //Bottom Left
            else if (rowIndex == (totalRow - 1)) {
                return {
                    //"background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding + 'px',
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            // other on the left
            else {
                return {
                    //"background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,

                };
            }
        }
        //All on the right
        else if (columnIndex == (designTable.header.text.length - 1)) {
            //Top Rigth
            if ((columnIndex == (designTable.header.text.length - 1)) && (rowIndex == 0)) {
                //Test Table with only one row
                if (totalRow === 1) {
                    return {
                        //"background-color": designTable.columns[columnIndex].backgroundColor,
                        "text-align": designTable.columns.design[columnIndex].textAlign,
                        "padding": designTable.columns.design[columnIndex].padding + 'px',
                        "font-family": designTable.columns.design[columnIndex].font.family,
                        "color": designTable.columns.design[columnIndex].font.color,
                        "font-size": designTable.columns.design[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columns.bordure.color,
                        "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-left": "0px solid " + designTable.columns.bordure.color,
                        "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    };
                }
                else {
                    return {
                        //"background-color": designTable.columns[columnIndex].backgroundColor,
                        "text-align": designTable.columns.design[columnIndex].textAlign,
                        "padding": designTable.columns.design[columnIndex].padding + 'px',
                        "font-family": designTable.columns.design[columnIndex].font.family,
                        "color": designTable.columns.design[columnIndex].font.color,
                        "font-size": designTable.columns.design[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columns.bordure.color,
                        "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-left": "0px solid " + designTable.columns.bordure.color,
                        "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    };
                }
            }
            //Bottom Right
            else if (((columnIndex == (designTable.header.text.length - 1)) && (rowIndex == (totalRow - 1)))) {
                return {
                    //"background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            //All other
            else {
                return {
                    //"background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                }
            }
        }
        //All other
        else {
            if (rowIndex == (totalRow - 1)) {
                return {
                    //"background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            else {
                return {
                    //"background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
        }
    }
}

// For Tables Element-UI
export const  getDesignElementUiHeaderStyleSansData = ( rowIndex: number, columnIndex: number, designTable: ITableDataUiDesignedWithoutData, totalRow: number) => {
    //Title
    if (rowIndex === 0) {
        return {
            "color": designTable.title.font["color"],
            "height": designTable.title.height,
            "background-color": designTable.title["background-color"],
            "text-align": designTable.title["textAlign"],
            "padding": designTable.title["padding"],
            "font-family": designTable.title.font["family"],
            "font-size": designTable.title.font["size"],
            "border-top":  designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-bottom": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
        };
    }
    //Header First column
    else if (rowIndex === 1) {
        //Header First column
        if (columnIndex === 0) {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top": "0px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": designTable.title.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-right": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
            };
        }
        //Header Last column
        else if (columnIndex === (designTable.header.text.length - 1)) {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top": "0px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": "0px solid " + designTable.header.bordure.color,
                "border-right": designTable.title.bordure.length + "px solid " + designTable.header.bordure.color,
            };
        }
        //Header All other column
        else {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top": "0px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": "0px solid " + designTable.header.bordure.color,
                "border-right": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
            }
        }
    }
}
export const  getDesignElementUiCellsStyleSansData= ( rowIndex: number, columnIndex: number, designTable: ITableDataUiDesignedWithoutData, totalRow: number ) => {
    if ((columnIndex < designTable.header.text.length) && (totalRow > 0)) {
        //All on the left
        if (columnIndex == 0) {
            //Top Left
            if (rowIndex == 0) {
                //Test Table with only one row
                if (totalRow === 1) {
                    return {
                        "height": designTable.columns.height,
                        "text-align": designTable.columns.design[columnIndex].textAlign,
                        "padding": designTable.columns.design[columnIndex].padding,
                        "font-family": designTable.columns.design[columnIndex].font.family,
                        "color": "blue",
                        "font-size": designTable.columns.design[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columns.bordure.color,
                        "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    };
                }
                else {
                    return {
                        "height": designTable.columns.height,
                        "text-align": designTable.columns.design[columnIndex].textAlign,
                        "padding": designTable.columns.design[columnIndex].padding,
                        "font-family": designTable.columns.design[columnIndex].font.family,
                        "color": designTable.columns.design[columnIndex].font.color,
                        "font-size": designTable.columns.design[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columns.bordure.color,
                        "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    };
                }
            }
            //Bottom Left
            else if (rowIndex == (totalRow - 1)) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            // other on the left
            else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,

                };
            }
        }
        //All on the right
        else if (columnIndex == (designTable.header.text.length - 1)) {
            //Top Rigth
            if ((columnIndex == (designTable.header.text.length - 1)) && (rowIndex == 0)) {
                //Test Table with only one row
                if (totalRow === 1) {
                    return {
                        "height": designTable.columns.height,
                        "text-align": designTable.columns.design[columnIndex].textAlign,
                        "padding": designTable.columns.design[columnIndex].padding,
                        "font-family": designTable.columns.design[columnIndex].font.family,
                        "color": designTable.columns.design[columnIndex].font.color,
                        "font-size": designTable.columns.design[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columns.bordure.color,
                        "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-left": "0px solid " + designTable.columns.bordure.color,
                        "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    };
                }
                else {
                    return {
                        "height": designTable.columns.height,
                        "text-align": designTable.columns.design[columnIndex].textAlign,
                        "padding": designTable.columns.design[columnIndex].padding,
                        "font-family": designTable.columns.design[columnIndex].font.family,
                        "color": designTable.columns.design[columnIndex].font.color,
                        "font-size": designTable.columns.design[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columns.bordure.color,
                        "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                        "border-left": "0px solid " + designTable.columns.bordure.color,
                        "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    };
                }
            }
            //Bottom Right
            else if (((columnIndex == (designTable.header.text.length - 1)) && (rowIndex == (totalRow - 1)))) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            //All other
            else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                }
            }
        }
        //All other
        else {
            if (rowIndex == (totalRow - 1)) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
        }
    }
}

// For Table HTML with only one header
export const getDesignTableHeaderStyleHeader = ( rowIndex: number, columnIndex: number, designTable: ITableDataFactoryMain | ITableDataFactoryInfo ) => {
    //Title
    if (rowIndex === 0) {
        return {
            "color": designTable.title.font["color"],
            "height": designTable.title.height,
            "background-color": designTable.title["background-color"],
            "text-align": designTable.title["textAlign"],
            "padding": designTable.title["padding"],
            "font-family": designTable.title.font["family"],
            "font-size": designTable.title.font["size"],
            "border-top":  designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-bottom": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
        }
    }
    //Header
    else if (rowIndex >= 1) {
        //Header First column
        if (columnIndex === 0) {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top":  designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
                "border-right": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
            }
        }
        //Header Last column
        else if (columnIndex === (designTable.columns.text.length - 1)) {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top":  designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            }
        } else {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top":  designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-right": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
            }
        }
    }
}
export const getDesignTableCellsStyleHeader = ( rowIndex: number, columnIndex: number, rowMax: number, designTable: ITableDataFactoryMain | ITableDataFactoryInfo ) => {
    debugger
    if (columnIndex < designTable.columns.text.length) {
        //All on the left
        if (columnIndex == 0) {
            //Top Left
            if (rowIndex == 0) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            //Bottom Left
            else if (rowIndex == (rowMax - 1)) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            // other on the left
            else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,

                };
            }
        }
        //All on the right
        else if (columnIndex == (designTable.columns.text.length - 1)) {
            //Top Rigth
            if (rowIndex == 0) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding + 'px',
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                }
                //Bottom Right
            } else if (rowIndex == (rowMax - 1)) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                };

            }
            //All other
            else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                }
            }
        }
        //All other
        else {
            //All other bottom
            if (rowIndex == (rowMax - 1)) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                }
            } else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
        }
    }
}


// For Table HTML with one header and SubHeader
export const getDesignTableHeaderStyleHeaders = ( rowIndex: number, columnIndex: number, designTable: ITableProjectPriorityDifficulty ) => {
    //Title
    if (rowIndex === 0) {
        return {
            "color": designTable.title.font["color"],
            "height": designTable.title.height,
            "background-color": designTable.title["background-color"],
            "text-align": designTable.title["textAlign"],
            "padding": designTable.title["padding"],
            "font-family": designTable.title.font["family"],
            "font-size": designTable.title.font["size"],
            "border-top":  designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-bottom": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
        }
    }
    //Header
    else if (rowIndex == 1) {
        //Header First column
        if (columnIndex === 0) {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top":  designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
                "border-right": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
            }
        }
        //Header Last column
        else if (columnIndex === (designTable.columns.text.length - 1)) {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top":  designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            }
        } else {
            return {
                "color": designTable.header.font["color"],
                "height": designTable.header.height,
                "background-color": designTable.header["background-color"],
                "text-align": designTable.header["textAlign"],
                "padding": designTable.header["padding"],
                "font-family": designTable.header.font["family"],
                "font-size": designTable.header.font["size"],
                "border-top":  designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-bottom": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-left": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
                "border-right": designTable.header.bordure.length + "px solid " + designTable.header.bordure.color,
            }
        }
    }
    else if (rowIndex >= 2) {
        //Header First column
        if (columnIndex === 0) {
            return {
                "color": designTable.headerSub.font["color"],
                "height": designTable.headerSub.height,
                "background-color": designTable.headerSub["background-color"],
                "text-align": designTable.headerSub["textAlign"],
                "padding": designTable.headerSub["padding"],
                "font-family": designTable.headerSub.font["family"],
                "font-size": designTable.headerSub.font["size"],
                "border-top":  designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
                "border-bottom": designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
                "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
                "border-right": designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
            }
        }
        //Header Last column
        else if (columnIndex === (designTable.headerSub.text.length - 1)) {
            return {
                "color": designTable.headerSub.font["color"],
                "height": designTable.headerSub.height,
                "background-color": designTable.headerSub["background-color"],
                "text-align": designTable.headerSub["textAlign"],
                "padding": designTable.headerSub["padding"],
                "font-family": designTable.headerSub.font["family"],
                "font-size": designTable.headerSub.font["size"],
                "border-top":  designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
                "border-bottom": designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
                "border-left": designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
                "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            }
        } else {
            return {
                "color": designTable.headerSub.font["color"],
                "height": designTable.headerSub.height,
                "background-color": designTable.headerSub["background-color"],
                "text-align": designTable.headerSub["textAlign"],
                "padding": designTable.headerSub["padding"],
                "font-family": designTable.headerSub.font["family"],
                "font-size": designTable.headerSub.font["size"],
                "border-top":  designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
                "border-bottom": designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
                "border-left": designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
                "border-right": designTable.headerSub.bordure.length + "px solid " + designTable.headerSub.bordure.color,
            }
        }
    }
}
export const getDesignTableCellsStyleHeaders = ( rowIndex: number, columnIndex: number, rowMax: number, designTable: ITableProjectPriorityDifficulty ) => {
    if (columnIndex < designTable.columns.text.length) {
        //All on the left
        if (columnIndex == 0) {
            //Top Left
            if (rowIndex == 0) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            //Bottom Left
            else if (rowIndex == (rowMax - 1)) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
            // other on the left
            else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,

                };
            }
        }
        //All on the right
        else if (columnIndex == (designTable.columns.text.length - 1)) {
            //Top Rigth
            if (rowIndex == 0) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding + 'px',
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                }
                //Bottom Right
            } else if (rowIndex == (rowMax - 1)) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                };

            }
            //All other
            else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columns.bordure.color,
                }
            }
        }
        //All other
        else {
            //All other bottom
            if (rowIndex == (rowMax - 1)) {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.header.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                }
            } else {
                return {
                    "height": designTable.columns.height,
                    "text-align": designTable.columns.design[columnIndex].textAlign,
                    "padding": designTable.columns.design[columnIndex].padding,
                    "font-family": designTable.columns.design[columnIndex].font.family,
                    "color": designTable.columns.design[columnIndex].font.color,
                    "font-size": designTable.columns.design[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columns.bordure.color,
                    "border-bottom": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                    "border-left": "0px solid " + designTable.columns.bordure.color,
                    "border-right": designTable.columns.bordure.length + "px solid " + designTable.columns.bordure.color,
                };
            }
        }
    }
}
