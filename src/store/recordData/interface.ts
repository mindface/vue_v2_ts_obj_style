export interface RootState {
  version: string;
}

export interface StateType {
  record_data: RecordData[];
}

export interface RecordData {
  id: number;
  argent_id: number;
  data_id: number;
  title: string;
  category: string;
  body: string;
  created_at: string;
  updated_at: string;
}

export interface SendRecordData {
  title: string;
  body: string;
  reedtag_id: number;
}

export interface RecordImageData {
  id: number;
  caption: string;
  image_path: string;
}
