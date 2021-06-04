import { objGeneralState } from '../state/general-state';

export async function getSvg(): Promise<string> {
  // console.log('cars', cars.data);

  return `
    <?xml version="1.0" encoding="utf-8"?>
    <svg 
      version="1.1" 
      id="Icons" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      x="0px" 
      y="0px"
      viewBox="0 0 32 32" 
      style="enable-background:new 0 0 32 32;" 
      xml:space="preserve"
    >
      <style type="text/css">
        .st${objGeneralState.carsCout}
          {
            fill:${objGeneralState.carColor[objGeneralState.carsCout]};
            stroke:#000000;
            stroke-width:2;
            stroke-linecap:round;
            stroke-linejoin:round;
            stroke-miterlimit:10;
          }
      </style>
      <circle 
        class="st${objGeneralState.carsCout}" 
        cx="7" 
        cy="23" 
        r="3"
      />
      <circle 
        class="st${objGeneralState.carsCout}" 
        cx="23" 
        cy="23" 
        r="3"
      />
      <line 
      class="st${objGeneralState.carsCout}" 
        x1="28" 
        y1="19" 
        x2="30" 
        y2="19"
      />
      <line 
      class="st${objGeneralState.carsCout}" 
        x1="4" 
        y1="16" 
        x2="24" 
        y2="16"
      />
      <line 
        class="st${objGeneralState.carsCout}" 
        x1="13" 
        y1="10" 
        x2="10" 
        y2="16"
      />
      <path 
        class="st${objGeneralState.carsCout}" 
        d="M26,23h4c0.6,0,1-0.4,
        1-1v-2c0-2.2-1.8-4-4-4h-3l-3.8-4.6c-0.8-0.9-1.9-1.4-3.1-1.4H9.5c-1.5,
        0-2.9,0.9-3.6,2.2
        L4,16H3c-1.1,0-2,0.9-2,2v4c0,0.6,0.4,1,1,1h2"
      />
      <line 
        class="st${objGeneralState.carsCout}" 
        x1="10" 
        y1="23" 
        x2="20" 
        y2="23"
      />
    </svg>
  `;
}
