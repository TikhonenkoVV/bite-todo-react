const sizes = {
  onlymobile: '374px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
  notdesktop: '1439px',
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
      addColumnButtonColor: '#fff', //Add column button color,
      addColumnButtonBackground: '#121212', //Add column button Background,
      addColumnButtonHoverBackground: '#000', //Add column button hover Background,
      iconContainerBackground: '#fff', //Icon container Background,
      addColumnIconFill: '#121212', // Add column icon fill
      formTitleColor: '#fff', // form title color
      formBackgroundColor: '#151515', // form background color
      formBorderColor: 'rgba(190, 219, 176, 0.5)', // form border color
      formInputColor: '#fff',
      formInputBackground: '#1f1f1f',
      formInputBorderColor: 'rgba(190, 219, 176, 0.5)',
      backgroundModal: '#151515', // Background modal
      borderModal: 'rgba(190, 219, 176, 0.5)', // Border modal
      boxShadowModal: 'rgba(22, 22, 22, 0.05)', // Box shadow modal
      closeModalBtn: '#FFFFFF', // Close modal
      closeModalBtnHover: 'rgba(255, 255, 255, 0.5)', // Modal close button hover
      backgroundUserImgWrapper: '#1F1F1F', // Background user wrapper
      iconUserColor: '#151515', // Fill icon user
      borderIconUser: 'none', // Border icon user
      backgroundAddIcon: '#bedbb0', // Background add icon
      colorAddIcon: 'rgba(22, 22, 22, 1)', // Color add icon
      textColorForm: '#FFFFFF', // Text color form
      borderInputColor: '#bedbb0', // Border input color
      errorColor: '#ed4337', // Error color
      eyeShowPassColor: 'rgba(255, 255, 255, 1)', // Eye show password color
      wrapperSelectorColor: 'rgba(255, 255, 255, 0.8)', // Wrapper selector color
      backgroundSelector: '#161616', // Background color selector
      borderSelectorColor: 'rgba(255, 255, 255, 0.5)', // Border selector
      textSelectorColor: 'rgba(255, 255, 255, 0.5)', // Text selector color
      hoverSelectorColor: '#bedbb0', // Hover selector color
      filterColor: 'rgba(255, 255, 255, 0.8)', // Dashboard filter color
      filterBgd: 'rgba(22, 22, 22, 0.4)', // Status filter component background
      filterShadow:
        ' 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)', // Status filter component shadow
      filterContainerBackground: '#151515', // Dashboard filter modal background
      filterContainerShadow: 'none', // Dashboard filter modal shadow
      filterDecorativeElement: '2px solid #000', // Dashboard filter modal (slected button ::after element color)
      filterBtnColor: 'rgba(255, 255, 255, 0.5)', // Filter button(option) color
      filterBtnColorSelected: '#fff', // Selected filter button(option) color
      filterWithoutPriorityColor: 'rgba(255, 255, 255, 0.3)', // Filter button without priority (::before element bgd color)
      formIconContainerBackground: '#161616', //Column form icon container background,
      formAddButtonBackground: '#BEDBB0', //Form add button background
      formAddButtonColor: '#161616', //Form add button text color
      formAddButtonHover: '#9dc888', //Form add button hover background color
      formIconAddButtonFill: '#fff', //Form add button icon fill
      createBoardContainerColor: 'rgba(255, 255, 255, 0.5)', //Create board container color
      mainTrackHorizontalBackground: '#161616', //Main dashboard scroll background
      mainThumbHorizontalBackground: 'rgba(255, 255, 255, 0.1)', //Main dashboard thumb background
      columnTrackVerticalBackground: 'rgba(255, 255, 255, 0.1)', //Column scroll background
      columnThumbVerticalBackground: '#121212', //Column thumb background
      calendarBackGround: '#1f1f1f', //Calendar
      calendarNumberColor: '#FFF', //Calendar number color
      calendarSelectedColor: '#BEDBB0', //Calendar selected color
      plusButtonColor: '#FFF', //Plus button color
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
      addColumnButtonColor: '#161616', //Add column button color,
      addColumnButtonBackground: '#fff', //Add column button Background,
      addColumnButtonHoverBackground: '#e5e5e5', //Add column button hover Background,
      iconContainerBackground: '#000', //Icon container Background,
      addColumnIconFill: '#fff', // Add column icon fill
      formTitleColor: '#161616', // form title color
      formBackgroundColor: '#FCFCFC', // form background color
      formBorderColor: 'rgba(190, 219, 176, 0.5)', // form border color
      formInputColor: '#161616',
      formInputBackground: '#fff',
      formInputBorderColor: '#BEDBB0',
      backgroundModal: '#FCFCFC', // Background modal
      borderModal: 'none', // Border modal
      boxShadowModal: 'rgba(22, 22, 22, 0.05)', // Box shadow modal
      closeModalBtn: '#161616', // Close modal
      closeModalBtnHover: 'rgba(22, 22, 22, 0.5)', // Modal close button hover
      backgroundUserImgWrapper: '#F6F6F7', // Background user wrapper
      iconUserColor: '#FFFFFF', // Fill icon user
      borderIconUser: 'rgba(22, 22, 22, 0.05)', // Border icon user
      backgroundAddIcon: '#bedbb0', // Background add icon
      colorAddIcon: 'rgba(22, 22, 22, 1)', // Color add icon
      textColorForm: '#161616', // Text color form
      borderInputColor: '#BEDBB0', // Border input color
      errorColor: '#ed4337', // Error color
      eyeShowPassColor: 'rgba(22, 22, 22, 0.3)', // eye show password color
      wrapperSelectorColor: '#161616', // Wrapper selector color
      backgroundSelector: '#FCFCFC', // Background color selector
      borderSelectorColor: 'rgba(22, 22, 22, 0.8)', // Border selector
      textSelectorColor: '#161616', // Text selector color
      hoverSelectorColor: '#BEDBB0', // Hover selector color
      boxShadowSelector: 'rgba(17, 17, 17, 0.1)', // Shadow selector
      filterColor: 'rgba(22, 22, 22, 0.8)', // Dashboard filter color
      filterBgd: 'rgba(255, 255, 255, 0.4)', // Status filter component background
      filterShadow:
        ' 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)', // Status filter component shadow
      filterContainerBackground: '#FCFCFC', // Dashboard filter modal background
      filterContainerShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.05)', // Dashboard filter modal shadow
      filterDecorativeElement: '2px solid #fff', // Dashboard filter modal (slected button ::after element color)
      filterBtnColor: 'rgba(22, 22, 22, 0.5)', // Filter button(option) color
      filterBtnColorSelected: '#161616', // Selected filter button(option) color
      filterWithoutPriorityColor: 'rgba(22, 22, 22, 0.3)', // Filter button without priority (::before element bgd color)
      formIconContainerBackground: '#161616', //Column form icon container background,
      formAddButtonBackground: '#BEDBB0', //Form add button background
      formAddButtonColor: '#161616', //Form add button text color
      formAddButtonHover: '#9DC888', //Form add button hover background color
      formIconAddButtonFill: '#fff', //Form add button icon fill
      createBoardContainerColor: 'rgba(22, 22, 22, 0.70)', //Create board container color
      mainTrackHorizontalBackground: '#FFF', //Main dashboard scroll background
      mainThumbHorizontalBackground: '#E8E8E8', //Main dashboard thumb background
      columnTrackVerticalBackground: '#E8E8E8', //Column scroll background
      columnThumbVerticalBackground: 'rgba(22, 22, 22, 0.10)', //Column thumb background
      calendarBackGround: '#FCFCFC', //Calendar
      calendarNumberColor: '#161616', //Calendar number color
      calendarSelectedColor: '#BEDBB0', //Calendar selected color
      plusButtonColor: '#161616', //Plus button color
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
      addButtonColor: '#FFFFFF', //Add (Edit) button color,
      addButtonBackground: '#5255BC', //Add (Edit) button Background and text "TaskPro" help area,
      addButtonHoverBackground: '#7B7EDE', //Add (Edit) button hover Background,
      addColumnButtonColor: '#161616', //Add column button color,
      addColumnButtonBackground: '#fff', //Add column button Background,
      addColumnButtonHoverBackground: '#e5e5e5', //Add column button hover Background,
      iconContainerBackground: '#5255BC;', //Icon container Background,
      addColumnIconFill: '#fff', // Add column icon fill
      formTitleColor: '#161616', // form title color
      formBackgroundColor: '#FCFCFC', // form background color
      formBorderColor: 'rgba(190, 219, 176, 0.5)', // form border color
      formInputColor: '#161616',
      formInputBackground: '#fff',
      formInputBorderColor: '#5255BC',
      backgroundModal: '#FCFCFC', // Background modal
      borderModal: 'none', // Border modal
      boxShadowModal: 'rgba(22, 22, 22, 0.05)', // Box shadow modal
      closeModalBtn: '#161616', // Close modal
      closeModalBtnHover: 'rgba(22, 22, 22, 0.5)', // Modal close button hover
      backgroundUserImgWrapper: 'rgba(236, 237, 253, 1)', // Background user wrapper
      iconUserColor: '#FFFFFF', // Fill icon user
      borderIconUser: 'rgba(22, 22, 22, 0.05)', // Border icon user
      backgroundAddIcon: '#ECEDFD', // Background add icon
      colorAddIcon: 'rgba(22, 22, 22, 1)', // Color add icon
      textColorForm: '#161616', // Text color form
      borderInputColor: '#5255BC', // Border input color
      errorColor: '#ed4337', // Error color
      eyeShowPassColor: 'rgba(22, 22, 22, 0.3)', // eye show password color
      wrapperSelectorColor: '#161616', // Wrapper selector color
      backgroundSelector: '#FCFCFC', // Background color selector
      borderSelectorColor: 'rgba(22, 22, 22, 0.8)', // Border selector
      textSelectorColor: '#161616', // Text selector color
      hoverSelectorColor: '#5255BC', // Hover selector color
      boxShadowSelector: 'rgba(17, 17, 17, 0.1)', // Shadow selector
      filterColor: 'rgba(22, 22, 22, 0.8)', // Dashboard filter color
      filterBgd: 'rgba(255, 255, 255, 0.4)', // Status filter component background
      filterShadow:
        '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)', // Status filter component shadow
      filterContainerBackground: '#FCFCFC', // Dashboard filter modal background
      filterContainerShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.05)', // Dashboard filter modal shadow
      filterDecorativeElement: '2px solid #fff', // Dashboard filter modal (slected button ::after element color)
      filterBtnColor: 'rgba(22, 22, 22, 0.5)', // Filter button(option) color
      filterBtnColorSelected: '#161616', // Selected filter button(option) color
      filterWithoutPriorityColor: 'rgba(22, 22, 22, 0.3)', // Filter button without priority (::before element bgd color)
      formIconContainerBackground: '#fff', //Column form icon container background,
      formAddButtonBackground: '#5255BC', //Form add button background
      formAddButtonColor: '#fff', //Form add button text color
      formAddButtonHover: '#7B7EDE', //Form add button hover background color
      formIconAddButtonFill: '#161616', //Form add button icon fill
      createBoardContainerColor: 'rgba(22, 22, 22, 0.70)', //Create board container color
      mainTrackHorizontalBackground: '#FFF', //Main dashboard scroll background
      mainThumbHorizontalBackground: '#B8BCFD', //Main dashboard thumb background
      columnTrackVerticalBackground: '#FFF', //Column scroll background
      columnThumbVerticalBackground: '#B8BCFD', //Column thumb background
      calendarBackGround: '#FFF', //Calendar
      calendarNumberColor: '#161616', //Calendar number color
      calendarSelectedColor: '#5255BC', //Calendar selected color
    },
  },
});

export const devices = {
  onlymobile: `max-width: ${sizes.onlymobile}`,
  mobile: `min-width: ${sizes.mobile}`,
  tablet: `min-width: ${sizes.tablet}`,
  desktop: `min-width: ${sizes.desktop}`,
  notdesktop: `max-width: ${sizes.notdesktop}`,
  retina: 'min-device-pixel-ratio: 2',
};

export const baseTransition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const priority = Object.freeze({
  without: '#656565',
  low: '#8FA1D0',
  medium: '#E09CB5',
  high: '#BEDBB0',
});
