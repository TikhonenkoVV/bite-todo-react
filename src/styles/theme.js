const sizes = {
  onlymobile: '374px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const theme = Object.freeze({
  colors: {
    dark: {
      background: '#1F1F1F', //Background color
      sideBar: '#121212', //Sidebar color
      btnAddBoard: '#BEDBB0', //Button add new board color
      header: '#161616', //Header color
      btnColumn: '#121212', //Button column color
      btnAddColumn: '#fff', //Button add column color
      helpBackground: '1F1F1F', //Help area background color
      card: '#121212', //Task(card) color
      cardDecor: 'rgba(255, 255, 255, 0.10)', //Card decor line color
      cardMajorText: '#fff', //Task(card) title color
      cardMinorText: '#888888', //Task(card) description color
    },
    light: {
      background: '#F6F6F7', //Background color
      sideBar: '#fff', //Sidebar color
      btnAddBoard: '#BEDBB0', //Button add new board color
      header: '#FCFCFC', //Header color
      btnColumn: '#fff', //Button column color
      btnAddColumn: '#161616', //Button add column color
      helpBackground: 'F6F6F7', //Help area background color
      card: '#fff', //Task(card) color
      cardDecor: 'rgba(22, 22, 22, 0.10)', //Card decor line color
      cardMajorText: '#161616', //Task(card) title color
      cardMinorText: '#5C5C5C', //Task(card) description color
    },
    violet: {
      background: '#ECEDFD', //Background color
      sideBar: '#5255BC', //Sidebar color
      btnAddBoard: '#B8BCFD', //Button add new board color
      header: '#fff', //Header color
      btnColumn: '#fff', //Button column color
      btnAddColumn: '#5255BC', //Button add column color
      helpBackground: '#9092D6', //Help area background color
      card: '#fff', //Task(card) color
      cardDecor: 'rgba(22, 22, 22, 0.10)', //Card decor line color
      cardMajorText: '#161616', //Task(card) title color
      cardMinorText: '#5C5C5C', //Task(card) description color
    },
  },
  priority: {
    without: '#656565',
    low: '#8FA1D0',
    medium: '#E09CB5',
    high: '#BEDBB0',
  },
  devices: {
    onlymobile: `(max-width: ${sizes.onlymobile})`,
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    desktop: `(min-width: ${sizes.desktop})`,
  },
});
