// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Concern = any;

const recursiveFilter = (concern: Concern, value: string): boolean => {
  if (Array.isArray(concern)) {
    return concern.some(item => {
      return recursiveFilter(item, value);
    });
  }

  if (typeof concern === "object") {
    if (concern === null) {
      return false;
    }
    const keys = Object.keys(concern);
    return keys.some(key => {
      return recursiveFilter(concern[key], value);
    });
  }

  if (typeof concern === "string") {
    return concern.toLowerCase().includes(value.toLowerCase());
  }

  if (Number.isInteger(parseInt(concern, 10))) {
    if (concern.toString().includes(value)) {
      return true;
    }
    if (concern === value) {
      return true;
    }
    return false;
  }

  return false;
};

const tableFilter = (
  row: {
    original: Record<string, Concern>;
    renderValue: (columnId: string) => Concern;
  },
  columnId: string,
  value: string
): boolean => {
  let concern = row.original[columnId];
  if (!concern) {
    concern = row.renderValue(columnId);
  }
  return recursiveFilter(concern, value);
};

const valueFilter = (
  row: { renderValue: (columnId: string) => Concern },
  columnId: string,
  value: string
): boolean => {
  const concern = row.renderValue(columnId);
  if (!concern || typeof concern !== "string") {
    return false;
  }

  return concern.toLowerCase().includes(value.toLowerCase());
};

export { tableFilter, valueFilter };
