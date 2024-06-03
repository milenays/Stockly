import * as React from "react";

export const Tabs = ({ children, defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div>
      {React.Children.map(children, child => {
        if (child.type.displayName === 'TabsList') {
          return React.cloneElement(child, { value, setValue });
        }
        return React.cloneElement(child, { value });
      })}
    </div>
  );
};

export const TabsList = ({ children, value, setValue }) => {
  return (
    <div className="flex border-b border-gray-200">
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, setValue })
      )}
    </div>
  );
};

export const TabsTrigger = ({ children, value, setValue }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium ${
        value === children ? "text-blue-600 border-blue-600" : "text-gray-600 border-transparent"
      }`}
      onClick={() => setValue(children)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value }) => {
  return (
    <div className={`${value === children.props.value ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';
