function ModalShow({isShow, handleOk, handleCancel, getNameProduct}) {
  return (
    isShow && (
      <div className="modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thông báo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCancel}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
            <p>Bạn có muốn xóa : {getNameProduct}</p>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCancel}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleOk}>Delete</button>
            
            </div>
          </div>
        </div>
      </div>
    )
  );
}

