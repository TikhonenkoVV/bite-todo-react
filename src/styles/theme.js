const sizes = {
  onlymobile: '374px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
  notdesktop: '1339px',
};

export const theme = Object.freeze({
  dark: {
    colors: {
      background: '#1F1F1F', //Background color
      sideBar: '#121212', //Sidebar color
      sideBarMainText: '#fff', //Sidebar color text main
      btnAddBoard: '#BEDBB0', //Button add new board color
      btnAddBoardHover: '#9dc888', //Button add new board hover color
      btnAddBoardIcon: '#121212', //Button add new board icon color
      activeBoardBackground: '#1F1F1F', //Background-color active board
      btnLogOut: '#BEDBB0', //Button Log out color
      btnLogOutHover: '#9dc888', //Button Log out hover color
      boardTitleTextIcon: 'rgba(255, 255, 255, 0.5)', //Color text title "My boards" and icon fill sidebar
      sidebarDecor: 'rgba(255, 255, 255, 0.1)', //Color sidebar decor
      header: '#161616', //Header color
      btnColumn: '#121212', //Button column color
      btnAddColumn: '#fff', //Button add column color
      helpBackground: '#1F1F1F', //Help area background color
      card: '#121212', //Task(card) color
      cardDecor: 'rgba(255, 255, 255, 0.10)', //Card decor line color
      cardMajorText: '#fff', //Task(card) title color
      cardMinorText: '#888888', //Task(card) description color,
      titleColor: '#fff', //Column title color,
      iconFill: 'rgba(255, 255, 255, 0.5)', //Column icon fill,
      iconHover: 'rgba(255, 255, 255, 1.0)', //Column icon hover,
      buttonIconBackground: '#000', //button icon background,
      buttonIconFill: '#fff', //button icon fill,
      addButtonColor: '#161616', //Add (Edit) button color,
      addButtonBackground: '#bedbb0', //Add (Edit) button Background and text "TaskPro" help area,
      addButtonHoverBackground: '#9dc888', //Add (Edit) button hover Background,
      mainDashboardBackground: '#1f1f1f', //Main dashboard background color
      addColumnButtonColor: '#fff', //Add column button color,
      addColumnButtonBackground: '#121212', //Add column button Background,
      addColumnButtonHoverBackground: '#000', //Add column button hover Background,
      iconContainerBackground: '#fff', //Icon container Background,
      addColumnIconFill: '#121212', // Add column icon fill
    },
  },
  light: {
    colors: {
      background: '#F6F6F7', //Background color
      sideBar: '#fff', //Sidebar color
      sideBarMainText: '#161616', //Sidebar color text main
      btnAddBoard: '#BEDBB0', //Button add new board color
      btnAddBoardHover: '#9dc888', //Button add new board hover color
      btnAddBoardIcon: '#121212', //Button add new board icon color
      activeBoardBackground: '#f6f6f7', //Background-color active board
      btnLogOut: '#BEDBB0', //Button Log out color
      btnLogOutHover: '#9dc888', //Button Log out hover color
      boardTitleTextIcon: 'rgba(22, 22, 22, 0.5)', //Color text title "My boards" and icon fill sidebar
      sidebarDecor: 'rgba(22, 22, 22, 0.1)', //Color sidebar decor
      header: '#FCFCFC', //Header color
      btnColumn: '#fff', //Button column color
      btnAddColumn: '#161616', //Button add column color
      helpBackground: '#F6F6F7', //Help area background color
      card: '#fff', //Task(card) color
      cardDecor: 'rgba(22, 22, 22, 0.10)', //Card decor line color
      cardMajorText: '#161616', //Task(card) title color
      cardMinorText: '#5C5C5C', //Task(card) description color
      titleColor: '#161616', //Column title color,
      iconFill: 'rgba(22, 22, 22, 0.50)', //Column icon fill,
      iconHover: 'rgba(22, 22, 22, 1.0)', //Column icon hover,
      buttonIconBackground: '#000', //button icon background,
      buttonIconFill: '#fff', //button icon fill,
      addButtonColor: '#161616', //Add (Edit) button color,
      addButtonBackground: '#bedbb0', //Add (Edit) button Background and text "TaskPro" help area,
      addButtonHoverBackground: '#9dc888', //Add (Edit) button hover Background,
      mainDashboardBackground: 'F6F6F7', //Main dashboard background color
      addColumnButtonColor: '#161616', //Add column button color,
      addColumnButtonBackground: '#fff', //Add column button Background,
      addColumnButtonHoverBackground: '#e5e5e5', //Add column button hover Background,
      iconContainerBackground: '#000', //Icon container Background,
      addColumnIconFill: '#fff', // Add column icon fill
    },
  },
  violet: {
    colors: {
      background: '#ECEDFD', //Background color
      sideBar: '#5255BC', //Sidebar color
      sideBarMainText: '#fff', //Sidebar color text main
      btnAddBoard: '#B8BCFD', //Button add new board color
      btnAddBoardHover: '#979CEA', //Button add new board hover color
      btnAddBoardIcon: '#fff', //Button add new board icon color
      activeBoardBackground: 'rgba(255, 255, 255, 0.5)', //Background-color active board
      btnLogOut: '#fff', //Button Log out color
      btnLogOutHover: '#B8BCFD', //Button Log out hover color
      boardTitleTextIcon: 'rgba(255, 255, 255, 0.5)', //Color text title "My boards" and icon fill sidebar
      sidebarDecor: 'rgba(255, 255, 255, 0.1)', //Color sidebar decor
      header: '#fff', //Header color
      btnColumn: '#fff', //Button column color
      btnAddColumn: '#5255BC', //Button add column color
      helpBackground: 'rgba(236, 237, 253, 0.40)', //Help area background color
      card: '#fff', //Task(card) color
      cardDecor: 'rgba(22, 22, 22, 0.10)', //Card decor line color
      cardMajorText: '#161616', //Task(card) title color
      cardMinorText: '#5C5C5C', //Task(card) description color
      titleColor: '#161616', //Column title color,
      iconFill: 'rgba(22, 22, 22, 0.50)', //Column icon fill,
      iconHover: 'rgba(22, 22, 22, 1.0)', //Column icon hover,
      buttonIconBackground: '#fff', //button icon background,
      buttonIconFill: '#161616', //button icon fill,
      addButtonColor: '#161616', //Add (Edit) button color,
      addButtonBackground: '#5255BC', //Add (Edit) button Background and text "TaskPro" help area,
      addButtonHoverBackground: '#7B7EDE', //Add (Edit) button hover Background,
      mainDashboardBackground: '#ECEDFD', //Main dashboard background color
      addColumnButtonColor: '#161616', //Add column button color,
      addColumnButtonBackground: '#fff', //Add column button Background,
      addColumnButtonHoverBackground: '#e5e5e5', //Add column button hover Background,
      iconContainerBackground: '#5255BC;', //Icon container Background,
      addColumnIconFill: '#fff', // Add column icon fill
    },
  },
});

export const devices = {
  onlymobile: `(max-width: ${sizes.onlymobile})`,
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
  notdesktop: `(max-width: ${sizes.desktop})`,
};

export const baseTransition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const priority = {
  without: '#656565',
  low: '#8FA1D0',
  medium: '#E09CB5',
  high: '#BEDBB0',
};
