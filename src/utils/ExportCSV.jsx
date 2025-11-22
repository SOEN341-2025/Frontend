const exportToCSV = (data, filename) => {
  const headers = Object.keys(data[0]).join(",");
  const rows = data.map(obj =>
    Object.values(obj).join(",")
  );

  const csvContent = [headers, ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};


export default exportToCSV