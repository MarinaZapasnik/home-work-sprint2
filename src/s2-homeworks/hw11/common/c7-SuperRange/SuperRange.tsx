import React from "react"
import { Slider, SliderProps } from "@mui/material"

const SuperRange: React.FC<SliderProps> = (props) => {
  const { value, ...restProps } = props
  return (
    <Slider
      sx={{
        color: "#0c2",
        height: 4,
        width: 147,
        borderRadius: 10,
        
        
        // стили для ползунка
        "& .MuiSlider-thumb": {
          width: 18,
          height: 18,
          border: '2px solid currentColor',
          backgroundColor: '#fff',
          
           
         '&::after': {
        content: '""',  
        height: 6,
        width: 6,
        borderRadius: '50%',
        backgroundColor: '#0c2',

  }
          
         
        },
        // стили для дорожки
        "& .MuiSlider-track": {
          border: "none",
          
        },
        // стили для неактивной части дорожки
        "& .MuiSlider-rail": {
          backgroundColor: "#8b8b8b",
        },
      }}
      // стили для слайдера // пишет студент

      value={value}
      {...restProps} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
