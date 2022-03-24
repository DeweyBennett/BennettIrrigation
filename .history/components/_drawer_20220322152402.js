import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';

export default function Drawer({
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle,
    ...props}){

    return(
        <Fragment>
            <RcDrawer
                open={open}
                onClose={toggleHandler}
                className={`drawer ${className ? className : ''}`.trim()}
                width={width}
                placement={placement}
                handler={false}
                level={null}
                duration="0.4s"
                {...props}
            >
                {closeButton && (
                <div as="div" onClick={toggleHandler} sx={closeBtnStyle}>
                    {closeButton}
                </div>
                )}
                <Box sx={drawerStyle}>{children}</Box>
            </RcDrawer>
            <Box
                className="drawer__handler"
                style={{ display: 'inline-block' }}
                onClick={toggleHandler}
            >
                {drawerHandler}
            </Box>
        </Fragment>
    );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};