import { SalesData, UsersData, CategoryData, RevenueData, SuperstoreOrder } from '../types';

// A sample from a real-world Superstore dataset
const rawData: SuperstoreOrder[] = [
  {"Row ID":1,"Order ID":"CA-2016-152156","Order Date":"11/8/2016","Ship Date":"11/11/2016","Ship Mode":"Second Class","Customer ID":"CG-12520","Customer Name":"Claire Gute","Segment":"Consumer","Country":"United States","City":"Henderson","State":"Kentucky","Postal Code":42420,"Region":"South","Product ID":"FUR-BO-10001798","Category":"Furniture","Sub-Category":"Bookcases","Product Name":"Bush Somerset Collection Bookcase","Sales":261.96,"Quantity":2,"Discount":0,"Profit":41.9136},
  {"Row ID":2,"Order ID":"CA-2016-152156","Order Date":"11/8/2016","Ship Date":"11/11/2016","Ship Mode":"Second Class","Customer ID":"CG-12520","Customer Name":"Claire Gute","Segment":"Consumer","Country":"United States","City":"Henderson","State":"Kentucky","Postal Code":42420,"Region":"South","Product ID":"FUR-CH-10000454","Category":"Furniture","Sub-Category":"Chairs","Product Name":"Hon Deluxe Fabric Upholstered Stacking Chairs, Rounded Back","Sales":731.94,"Quantity":3,"Discount":0,"Profit":219.582},
  {"Row ID":3,"Order ID":"CA-2016-138688","Order Date":"6/12/2016","Ship Date":"6/16/2016","Ship Mode":"Second Class","Customer ID":"DV-13045","Customer Name":"Darrin Van Huff","Segment":"Corporate","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90036,"Region":"West","Product ID":"OFF-LA-10000240","Category":"Office Supplies","Sub-Category":"Labels","Product Name":"Self-Adhesive Address Labels for Typewriters by Universal","Sales":14.62,"Quantity":2,"Discount":0,"Profit":6.8714},
  {"Row ID":4,"Order ID":"US-2015-108966","Order Date":"10/11/2015","Ship Date":"10/18/2015","Ship Mode":"Standard Class","Customer ID":"SO-20335","Customer Name":"Sean O'Donnell","Segment":"Consumer","Country":"United States","City":"Fort Lauderdale","State":"Florida","Postal Code":33311,"Region":"South","Product ID":"FUR-TA-10000577","Category":"Furniture","Sub-Category":"Tables","Product Name":"Bretford CR4500 Series Slim Rectangular Table","Sales":957.5775,"Quantity":5,"Discount":0.45,"Profit":-383.031},
  {"Row ID":5,"Order ID":"US-2015-108966","Order Date":"10/11/2015","Ship Date":"10/18/2015","Ship Mode":"Standard Class","Customer ID":"SO-20335","Customer Name":"Sean O'Donnell","Segment":"Consumer","Country":"United States","City":"Fort Lauderdale","State":"Florida","Postal Code":33311,"Region":"South","Product ID":"OFF-ST-10000760","Category":"Office Supplies","Sub-Category":"Storage","Product Name":"Eldon Fold 'N Roll Cart System","Sales":22.368,"Quantity":2,"Discount":0.2,"Profit":2.5164},
  {"Row ID":10,"Order ID":"CA-2014-115812","Order Date":"6/9/2014","Ship Date":"6/14/2014","Ship Mode":"Standard Class","Customer ID":"BH-11710","Customer Name":"Brosina Hoffman","Segment":"Consumer","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90032,"Region":"West","Product ID":"OFF-AP-10002892","Category":"Office Supplies","Sub-Category":"Appliances","Product Name":"Belkin F5C206VTEL 6 Outlet Surge","Sales":114.9,"Quantity":5,"Discount":0,"Profit":34.47},
  {"Row ID":11,"Order ID":"CA-2014-115812","Order Date":"6/9/2014","Ship Date":"6/14/2014","Ship Mode":"Standard Class","Customer ID":"BH-11710","Customer Name":"Brosina Hoffman","Segment":"Consumer","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90032,"Region":"West","Product ID":"FUR-TA-10001539","Category":"Furniture","Sub-Category":"Tables","Product Name":"Chromcraft Rectangular Conference Tables","Sales":1706.184,"Quantity":9,"Discount":0.2,"Profit":85.3092},
  {"Row ID":12,"Order ID":"CA-2014-115812","Order Date":"6/9/2014","Ship Date":"6/14/2014","Ship Mode":"Standard Class","Customer ID":"BH-11710","Customer Name":"Brosina Hoffman","Segment":"Consumer","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90032,"Region":"West","Product ID":"TEC-PH-10002033","Category":"Technology","Sub-Category":"Phones","Product Name":"Konftel 250 Conference phone","Sales":907.152,"Quantity":4,"Discount":0.2,"Profit":90.7152},
  {"Row ID":13,"Order ID":"CA-2017-114412","Order Date":"4/15/2017","Ship Date":"4/20/2017","Ship Mode":"Standard Class","Customer ID":"AA-10480","Customer Name":"Andrew Allen","Segment":"Consumer","Country":"United States","City":"Concord","State":"North Carolina","Postal Code":28027,"Region":"South","Product ID":"OFF-PA-10002365","Category":"Office Supplies","Sub-Category":"Paper","Product Name":"Xerox 1967","Sales":15.552,"Quantity":3,"Discount":0.2,"Profit":5.4432},
  {"Row ID":14,"Order ID":"CA-2016-161389","Order Date":"12/5/2016","Ship Date":"12/10/2016","Ship Mode":"Standard Class","Customer ID":"IM-15070","Customer Name":"Irene Maddox","Segment":"Consumer","Country":"United States","City":"Seattle","State":"Washington","Postal Code":98103,"Region":"West","Product ID":"OFF-BI-10003656","Category":"Office Supplies","Sub-Category":"Binders","Product Name":"Fellowes PB200 Plastic Comb Binding Machine","Sales":407.976,"Quantity":3,"Discount":0.2,"Profit":132.5922},
  {"Row ID":22,"Order ID":"CA-2016-137330","Order Date":"12/9/2016","Ship Date":"12/13/2016","Ship Mode":"Standard Class","Customer ID":"KB-16585","Customer Name":"Ken Black","Segment":"Corporate","Country":"United States","City":"Fremont","State":"Nebraska","Postal Code":68025,"Region":"Central","Product ID":"OFF-AR-10000246","Category":"Office Supplies","Sub-Category":"Art","Product Name":"Newell 318","Sales":19.46,"Quantity":7,"Discount":0,"Profit":5.0596},
  {"Row ID":23,"Order ID":"CA-2016-137330","Order Date":"12/9/2016","Ship Date":"12/13/2016","Ship Mode":"Standard Class","Customer ID":"KB-16585","Customer Name":"Ken Black","Segment":"Corporate","Country":"United States","City":"Fremont","State":"Nebraska","Postal Code":68025,"Region":"Central","Product ID":"OFF-AP-10001492","Category":"Office Supplies","Sub-Category":"Appliances","Product Name":"Acco 6 Outlet Guardian Basic Surge Protector","Sales":60.34,"Quantity":7,"Discount":0,"Profit":15.6884},
  {"Row ID":24,"Order ID":"US-2017-156909","Order Date":"7/16/2017","Ship Date":"7/18/2017","Ship Mode":"Second Class","Customer ID":"SF-20065","Customer Name":"Sandra Flanagan","Segment":"Consumer","Country":"United States","City":"Philadelphia","State":"Pennsylvania","Postal Code":19140,"Region":"East","Product ID":"FUR-CH-10002774","Category":"Furniture","Sub-Category":"Chairs","Product Name":"Global Deluxe Stacking Chair, Gray","Sales":71.372,"Quantity":2,"Discount":0.3,"Profit":-1.0196},
  {"Row ID":27,"Order ID":"CA-2016-121755","Order Date":"1/16/2016","Ship Date":"1/20/2016","Ship Mode":"Second Class","Customer ID":"EH-13945","Customer Name":"Eric Hoffmann","Segment":"Consumer","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90049,"Region":"West","Product ID":"TEC-AC-10003027","Category":"Technology","Sub-Category":"Accessories","Product Name":"Imation 8GB Mini TravelDrive USB 2.0 Flash Drive","Sales":90.57,"Quantity":3,"Discount":0,"Profit":11.7741},
  {"Row ID":35,"Order ID":"CA-2016-117590","Order Date":"12/8/2016","Ship Date":"12/10/2016","Ship Mode":"First Class","Customer ID":"GH-14485","Customer Name":"Gene Hale","Segment":"Corporate","Country":"United States","City":"Richardson","State":"Texas","Postal Code":75080,"Region":"Central","Product ID":"TEC-PH-10004977","Category":"Technology","Sub-Category":"Phones","Product Name":"GE 30524EE4","Sales":1097.544,"Quantity":7,"Discount":0.2,"Profit":123.4737},
  {"Row ID":36,"Order ID":"CA-2016-117590","Order Date":"12/8/2016","Ship Date":"12/10/2016","Ship Mode":"First Class","Customer ID":"GH-14485","Customer Name":"Gene Hale","Segment":"Corporate","Country":"United States","City":"Richardson","State":"Texas","Postal Code":75080,"Region":"Central","Product ID":"OFF-BI-10003669","Category":"Office Supplies","Sub-Category":"Binders","Product Name":"Fellowes File Cart, Tri-Tier","Sales":190.92,"Quantity":5,"Discount":0.8,"Profit":-305.472},
  {"Row ID":42,"Order ID":"CA-2017-120999","Order Date":"9/10/2017","Ship Date":"9/15/2017","Ship Mode":"Standard Class","Customer ID":"LC-16930","Customer Name":"Linda Cazamias","Segment":"Corporate","Country":"United States","City":"Naperville","State":"Illinois","Postal Code":60540,"Region":"Central","Product ID":"TEC-PH-10004093","Category":"Technology","Sub-Category":"Phones","Product Name":"Motorola Droid Maxx","Sales":377.97,"Quantity":3,"Discount":0.2,"Profit":28.3477},
  {"Row ID":43,"Order ID":"CA-2016-101343","Order Date":"7/17/2016","Ship Date":"7/22/2016","Ship Mode":"Standard Class","Customer ID":"RA-19885","Customer Name":"Ruben Ausman","Segment":"Corporate","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90049,"Region":"West","Product ID":"OFF-ST-10003479","Category":"Office Supplies","Sub-Category":"Storage","Product Name":"Eldon Base for stackable storage shelf, platinum","Sales":77.88,"Quantity":2,"Discount":0,"Profit":3.894},
  {"Row ID":44,"Order ID":"CA-2017-139619","Order Date":"9/19/2017","Ship Date":"9/23/2017","Ship Mode":"Standard Class","Customer ID":"ES-14080","Customer Name":"Erin Smith","Segment":"Corporate","Country":"United States","City":"Melbourne","State":"Florida","Postal Code":32935,"Region":"South","Product ID":"OFF-ST-10003282","Category":"Office Supplies","Sub-Category":"Storage","Product Name":"Advantus 10-Drawer Portable Organizer, Chrome and Blue","Sales":95.616,"Quantity":2,"Discount":0.2,"Profit":9.5616},
  {"Row ID":46,"Order ID":"CA-2016-146703","Order Date":"10/20/2016","Ship Date":"10/25/2016","Ship Mode":"Second Class","Customer ID":"PO-18850","Customer Name":"Patrick O'Brill","Segment":"Consumer","Country":"United States","City":"Philadelphia","State":"Pennsylvania","Postal Code":19143,"Region":"East","Product ID":"OFF-BI-10003684","Category":"Office Supplies","Sub-Category":"Binders","Product Name":"Avery Binder with Durable Clear Cover for Ring Print-Outs","Sales":9.618,"Quantity":2,"Discount":0.7,"Profit":-7.0532},
  {"Row ID":55,"Order ID":"CA-2016-111682","Order Date":"6/17/2016","Ship Date":"6/18/2016","Ship Mode":"First Class","Customer ID":"TB-21055","Customer Name":"Ted Butterfield","Segment":"Consumer","Country":"United States","City":"Troy","State":"New York","Postal Code":12180,"Region":"East","Product ID":"OFF-ST-10000604","Category":"Office Supplies","Sub-Category":"Storage","Product Name":"Home Style Fabric Lift-Top Storage Bench","Sales":102.36,"Quantity":4,"Discount":0,"Profit":25.59},
  {"Row ID":56,"Order ID":"CA-2015-149734","Order Date":"9/3/2015","Ship Date":"9/8/2015","Ship Mode":"Standard Class","Customer ID":"PF-19165","Customer Name":"Philip Fox","Segment":"Consumer","Country":"United States","City":"San Francisco","State":"California","Postal Code":94122,"Region":"West","Product ID":"OFF-BI-10004233","Category":"Office Supplies","Sub-Category":"Binders","Product Name":"GBC Standard Therm-A-Bind Covers","Sales":65.664,"Quantity":4,"Discount":0.2,"Profit":22.9824},
  {"Row ID":65,"Order ID":"CA-2015-135405","Order Date":"1/10/2015","Ship Date":"1/13/2015","Ship Mode":"First Class","Customer ID":"MS-17830","Customer Name":"Melanie Seite","Segment":"Consumer","Country":"United States","City":"Laredo","State":"Texas","Postal Code":78041,"Region":"Central","Product ID":"OFF-EN-10001434","Category":"Office Supplies","Sub-Category":"Envelopes","Product Name":"#10- 4 1/8\" x 9 1/2\" Security-Tint Envelopes","Sales":113.328,"Quantity":9,"Discount":0.2,"Profit":38.2482},
  {"Row ID":66,"Order ID":"CA-2015-135405","Order Date":"1/10/2015","Ship Date":"1/13/2015","Ship Mode":"First Class","Customer ID":"MS-17830","Customer Name":"Melanie Seite","Segment":"Consumer","Country":"United States","City":"Laredo","State":"Texas","Postal Code":78041,"Region":"Central","Product ID":"FUR-FU-10004093","Category":"Furniture","Sub-Category":"Furnishings","Product Name":"Hand-Finished Solid Wood Document File","Sales":1.68,"Quantity":1,"Discount":0.6,"Profit":-1.176},
  {"Row ID":73,"Order ID":"CA-2015-134469","Order Date":"10/2/2015","Ship Date":"10/4/2015","Ship Mode":"Second Class","Customer ID":"PS-19045","Customer Name":"Penelope Sewall","Segment":"Home Office","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90032,"Region":"West","Product ID":"OFF-PA-10001970","Category":"Office Supplies","Sub-Category":"Paper","Product Name":"Xerox 1908","Sales":28.44,"Quantity":6,"Discount":0,"Profit":13.3668},
  {"Row ID":74,"Order ID":"CA-2015-134469","Order Date":"10/2/2015","Ship Date":"10/4/2015","Ship Mode":"Second Class","Customer ID":"PS-19045","Customer Name":"Penelope Sewall","Segment":"Home Office","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90032,"Region":"West","Product ID":"OFF-BI-10004233","Category":"Office Supplies","Sub-Category":"Binders","Product Name":"GBC Standard Therm-A-Bind Covers","Sales":13.984,"Quantity":1,"Discount":0.2,"Profit":4.8944},
  {"Row ID":76,"Order ID":"US-2017-118038","Order Date":"12/9/2017","Ship Date":"12/11/2017","Ship Mode":"First Class","Customer ID":"DR-12940","Customer Name":"Daniel Raglin","Segment":"Home Office","Country":"United States","City":"Roseville","State":"California","Postal Code":95661,"Region":"West","Product ID":"TEC-AC-10003049","Category":"Technology","Sub-Category":"Accessories","Product Name":"Enermax Aurora Lite Keyboard","Sales":367.96,"Quantity":4,"Discount":0,"Profit":147.184},
  {"Row ID":77,"Order ID":"US-2017-118038","Order Date":"12/9/2017","Ship Date":"12/11/2017","Ship Mode":"First Class","Customer ID":"DR-12940","Customer Name":"Daniel Raglin","Segment":"Home Office","Country":"United States","City":"Roseville","State":"California","Postal Code":95661,"Region":"West","Product ID":"OFF-PA-10000763","Category":"Office Supplies","Sub-Category":"Paper","Product Name":"TOPS \"Important Message\" Pads, Canary, 4-1/4\" x 5-1/2\"","Sales":20.16,"Quantity":3,"Discount":0,"Profit":9.4752},
  {"Row ID":80,"Order ID":"CA-2016-129479","Order Date":"10/14/2016","Ship Date":"10/21/2016","Ship Mode":"Standard Class","Customer ID":"SS-20140","Customer Name":"Suschita Slade","Segment":"Consumer","Country":"United States","City":"New York City","State":"New York","Postal Code":10024,"Region":"East","Product ID":"OFF-BI-10001597","Category":"Office Supplies","Sub-Category":"Binders","Product Name":"Wilson Jones Ledger-Size, Piano-Hinge Binder, 2\"","Sales":132.22,"Quantity":7,"Discount":0.2,"Profit":42.9715},
  {"Row ID":81,"Order ID":"CA-2016-129479","Order Date":"10/14/2016","Ship Date":"10/21/2016","Ship Mode":"Standard Class","Customer ID":"SS-20140","Customer Name":"Suschita Slade","Segment":"Consumer","Country":"United States","City":"New York City","State":"New York","Postal Code":10024,"Region":"East","Product ID":"OFF-PA-10001659","Category":"Office Supplies","Sub-Category":"Paper","Product Name":"TOPS Carbonless Receipt Book, Four 2-3/4\" x 7-1/4\" Receipts per Page, 200 Sets per Book","Sales":31.04,"Quantity":4,"Discount":0,"Profit":14.5888},
  {"Row ID":86,"Order ID":"CA-2017-155558","Order Date":"10/26/2017","Ship Date":"11/2/2017","Ship Mode":"Standard Class","Customer ID":"PG-18895","Customer Name":"Paul Gonzalez","Segment":"Consumer","Country":"United States","City":"Rochester","State":"Minnesota","Postal Code":55901,"Region":"Central","Product ID":"TEC-AC-10001998","Category":"Technology","Sub-Category":"Accessories","Product Name":"Logitech LS21 Speaker System - PC","Sales":19.99,"Quantity":1,"Discount":0,"Profit":6.9965},
  {"Row ID":93,"Order ID":"CA-2015-149587","Order Date":"1/31/2015","Ship Date":"2/2/2015","Ship Mode":"Second Class","Customer ID":"JS-15685","Customer Name":"Jim Sink","Segment":"Corporate","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90036,"Region":"West","Product ID":"OFF-AP-10002452","Category":"Office Supplies","Sub-Category":"Appliances","Product Name":"Newell 3-Hole Punches","Sales":108.94,"Quantity":7,"Discount":0,"Profit":31.6033},
  {"Row ID":94,"Order ID":"CA-2015-149587","Order Date":"1/31/2015","Ship Date":"2/2/2015","Ship Mode":"Second Class","Customer ID":"JS-15685","Customer Name":"Jim Sink","Segment":"Corporate","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90036,"Region":"West","Product ID":"OFF-PA-10004071","Category":"Office Supplies","Sub-Category":"Paper","Product Name":"Xerox 1932","Sales":13.98,"Quantity":2,"Discount":0,"Profit":6.291},
  {"Row ID":95,"Order ID":"CA-2015-149587","Order Date":"1/31/2015","Ship Date":"2/2/2015","Ship Mode":"Second Class","Customer ID":"JS-15685","Customer Name":"Jim Sink","Segment":"Corporate","Country":"United States","City":"Los Angeles","State":"California","Postal Code":90036,"Region":"West","Product ID":"OFF-BI-10002012","Category":"Office Supplies","Sub-Category":"Binders","Product Name":"Avery Triangle Shaped Sheet Lifters for Binders, Clear, 10/Pack","Sales":9.784,"Quantity":1,"Discount":0.2,"Profit":3.4244},
  {"Row ID":97,"Order ID":"CA-2017-160623","Order Date":"9/17/2017","Ship Date":"9/21/2017","Ship Mode":"Standard Class","Customer ID":"SC-20095","Customer Name":"Sanjit Chand","Segment":"Consumer","Country":"United States","City":"Chicago","State":"Illinois","Postal Code":60653,"Region":"Central","Product ID":"OFF-PA-10001804","Category":"Office Supplies","Sub-Category":"Paper","Product Name":"Xerox 195","Sales":15.72,"Quantity":5,"Discount":0.2,"Profit":5.3055},
  {"Row ID":98,"Order ID":"CA-2017-157833","Order Date":"6/17/2017","Ship Date":"6/20/2017","Ship Mode":"First Class","Customer ID":"KD-16345","Customer Name":"Kieran Daniels","Segment":"Consumer","Country":"United States","City":"Springfield","State":"Virginia","Postal Code":22153,"Region":"South","Product ID":"OFF-PA-10001556","Category":"Office Supplies","Sub-Category":"Paper","Product Name":"Great White Multi-Use Recycled Paper (20Lb. and 84 Bright)","Sales":34.32,"Quantity":3,"Discount":0,"Profit":16.4736},
  {"Row ID":100,"Order ID":"CA-2017-157833","Order Date":"6/17/2017","Ship Date":"6/20/2017","Ship Mode":"First Class","Customer ID":"KD-16345","Customer Name":"Kieran Daniels","Segment":"Consumer","Country":"United States","City":"Springfield","State":"Virginia","Postal Code":22153,"Region":"South","Product ID":"OFF-BI-10001116","Category":"Office Supplies","Sub-Category":"Binders","Product Name":"Wilson Jones 1\" Hanging DublLock Ring Binders","Sales":16.75,"Quantity":5,"Discount":0,"Profit":7.705}
];


/**
 * Process raw Superstore data to get total sales per month.
 */
function processSalesData(data: SuperstoreOrder[]): SalesData[] {
  const monthlySales: { [key: string]: number } = {};
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  data.forEach(order => {
    const date = new Date(order['Order Date']);
    const month = date.getMonth();
    const year = date.getFullYear();
    const key = `${year}-${monthNames[month]}`;

    if (!monthlySales[key]) {
      monthlySales[key] = 0;
    }
    monthlySales[key] += order.Sales;
  });

  // Sort by date and format for the chart
  return Object.entries(monthlySales)
    .map(([key, sales]) => {
      const [year, month] = key.split('-');
      return {
        date: new Date(`${month} 1, ${year}`),
        month: month,
        sales: parseFloat(sales.toFixed(2)),
      };
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map(({ month, sales }) => ({ month, sales }));
}

/**
 * Process raw Superstore data to get total orders per day of the week.
 */
function processUsersData(data: SuperstoreOrder[]): UsersData[] {
  const ordersByDay: { [key: string]: number } = {
    'Sun': 0, 'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0
  };
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  data.forEach(order => {
    const dayOfWeek = new Date(order['Order Date']).getDay();
    const dayName = dayNames[dayOfWeek];
    ordersByDay[dayName]++;
  });

  return dayNames.map(day => ({ day, orders: ordersByDay[day] }));
}

/**
 * Process raw Superstore data to get total sales per category.
 */
function processCategoryData(data: SuperstoreOrder[]): CategoryData[] {
  const salesByCategory: { [key: string]: number } = {};

  data.forEach(order => {
    const category = order.Category;
    if (!salesByCategory[category]) {
      salesByCategory[category] = 0;
    }
    salesByCategory[category] += order.Sales;
  });

  return Object.entries(salesByCategory).map(([name, value]) => ({
    name,
    value: parseFloat(value.toFixed(2)),
  }));
}

/**
 * Process raw Superstore data for the revenue vs. profit scatter chart.
 * We can just use a sample of the raw data directly.
 */
function processRevenueData(data: SuperstoreOrder[]): RevenueData[] {
  return data.slice(0, 50).map(order => ({ // Use a slice for performance
    revenue: order.Sales,
    profit: order.Profit,
    itemsSold: order.Quantity,
  }));
}

// Export the processed data with the same variable names as before
export const salesData: SalesData[] = processSalesData(rawData);
export const usersData: UsersData[] = processUsersData(rawData);
export const categoryData: CategoryData[] = processCategoryData(rawData);
export const revenueData: RevenueData[] = processRevenueData(rawData);
