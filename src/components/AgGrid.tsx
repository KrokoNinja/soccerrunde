"use client"
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from 'react';
import { api } from '@/../convex/_generated/api';
import { useQuery } from 'convex/react';

export default function AgGrid() {
  const [rowData, setRowData] = useState<{ name: string; balance: number }[]>([]);
  const players = useQuery(api.player.get_players);
  useEffect(() => {
    if (players) {
      setRowData(players);
    }
  }, [players]);

  const [colDefs, setColDefs] = useState<ColDef<any>[]>([
      { field: "name" },
      { field: "balance" },
  ]);

  return (
    <div style={{ height: 500, width: "100%" }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
        />
    </div>
  )
}