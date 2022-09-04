import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FormSelectorControl = ({ labelId, id, value, label, onChange, inputLabel, mapItems }) => (
  <FormControl sx={{ m: 1, minWidth: 120, borderRadius: 50 }} size='small'>
    <InputLabel id='demo-select-small'>{inputLabel}</InputLabel>
    <Select
      labelId={labelId}
      id={id}
      value={value}
      label={label}
      onChange={onChange}
    >
      <MenuItem value=''>
        <em>None</em>
      </MenuItem>
      {mapItems.map((mapItem) => (
        <MenuItem key={mapItem.key} value={mapItem.key}>{mapItem.item}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default FormSelectorControl;
