export default function saveResults(values) {
  sessionStorage.setItem('userData',JSON.stringify(values, null, 2));
};

export function saveUsername(values){
    sessionStorage.setItem('userName',JSON.stringify(values, null, 2));
}